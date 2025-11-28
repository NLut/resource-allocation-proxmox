/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request_info" (
    "request_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "template_id" INTEGER NOT NULL,
    "instant_name" TEXT NOT NULL,
    "request_status" TEXT NOT NULL,
    "request_datetime" TIMESTAMP(3) NOT NULL,
    "end_datetime" TIMESTAMP(3) NOT NULL,
    "last_edit_datetime" TIMESTAMP(3) NOT NULL,
    "note" TEXT NOT NULL,
    "is_approve" BOOLEAN NOT NULL,

    CONSTRAINT "request_info_pkey" PRIMARY KEY ("request_id")
);

-- CreateTable
CREATE TABLE "request_edit_log" (
    "log_no" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "request_id" INTEGER NOT NULL,
    "json" JSONB NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "request_edit_log_pkey" PRIMARY KEY ("log_no")
);

-- CreateTable
CREATE TABLE "instance_template" (
    "instance_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpu_amount" INTEGER NOT NULL,
    "ram_amount" INTEGER NOT NULL,
    "gpu_amount" INTEGER NOT NULL,
    "storage_amount" INTEGER NOT NULL,

    CONSTRAINT "instance_template_pkey" PRIMARY KEY ("instance_id")
);

-- CreateTable
CREATE TABLE "os_template" (
    "os_id" SERIAL NOT NULL,
    "os_name" TEXT NOT NULL,
    "image_location" TEXT NOT NULL,
    "supported_platform" TEXT NOT NULL,

    CONSTRAINT "os_template_pkey" PRIMARY KEY ("os_id")
);

-- CreateTable
CREATE TABLE "instance_os_template" (
    "template_id" SERIAL NOT NULL,
    "os_id" INTEGER NOT NULL,
    "instance_id" INTEGER NOT NULL,

    CONSTRAINT "instance_os_template_pkey" PRIMARY KEY ("template_id")
);

-- CreateTable
CREATE TABLE "instance_info" (
    "instance_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "request_id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "machine_state" TEXT NOT NULL,
    "ip_addr" TEXT NOT NULL,
    "create_date" TIMESTAMP(3) NOT NULL,
    "expire_date" TIMESTAMP(3) NOT NULL,
    "update_by" TEXT NOT NULL,
    "update_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "instance_info_pkey" PRIMARY KEY ("instance_id")
);

-- CreateTable
CREATE TABLE "notification_info" (
    "notification_id" SERIAL NOT NULL,
    "request_id" INTEGER NOT NULL,
    "send_date" TIMESTAMP(3) NOT NULL,
    "is_send" BOOLEAN NOT NULL,
    "message_subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "notification_info_pkey" PRIMARY KEY ("notification_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_token_key" ON "verification_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "posts_name_idx" ON "posts"("name");

-- CreateIndex
CREATE INDEX "request_info_user_id_idx" ON "request_info"("user_id");

-- CreateIndex
CREATE INDEX "request_info_template_id_idx" ON "request_info"("template_id");

-- CreateIndex
CREATE INDEX "request_edit_log_user_id_idx" ON "request_edit_log"("user_id");

-- CreateIndex
CREATE INDEX "request_edit_log_request_id_idx" ON "request_edit_log"("request_id");

-- CreateIndex
CREATE INDEX "instance_os_template_os_id_idx" ON "instance_os_template"("os_id");

-- CreateIndex
CREATE INDEX "instance_os_template_instance_id_idx" ON "instance_os_template"("instance_id");

-- CreateIndex
CREATE INDEX "instance_info_user_id_idx" ON "instance_info"("user_id");

-- CreateIndex
CREATE INDEX "instance_info_request_id_idx" ON "instance_info"("request_id");

-- CreateIndex
CREATE INDEX "notification_info_request_id_idx" ON "notification_info"("request_id");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_info" ADD CONSTRAINT "request_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_info" ADD CONSTRAINT "request_info_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "instance_os_template"("template_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_edit_log" ADD CONSTRAINT "request_edit_log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_edit_log" ADD CONSTRAINT "request_edit_log_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request_info"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instance_os_template" ADD CONSTRAINT "instance_os_template_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os_template"("os_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instance_os_template" ADD CONSTRAINT "instance_os_template_instance_id_fkey" FOREIGN KEY ("instance_id") REFERENCES "instance_template"("instance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instance_info" ADD CONSTRAINT "instance_info_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "instance_info" ADD CONSTRAINT "instance_info_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request_info"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_info" ADD CONSTRAINT "notification_info_request_id_fkey" FOREIGN KEY ("request_id") REFERENCES "request_info"("request_id") ON DELETE RESTRICT ON UPDATE CASCADE;
