import { z } from "zod";

/* ============================================
   Custom Scalars & Helpers
   ============================================ */

// Helper to validate JSON types (for Prisma Json fields)
export const jsonSchema: z.ZodType<any> = z.lazy(() =>
    z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.null(),
        z.array(jsonSchema),
        z.record(jsonSchema),
    ]),
);

/* ============================================
   USER (Auth + Profile)
   ============================================ */

export const UserSchema = z.object({
    // changed from BigInt to String (CUID)
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().email().nullable(),
    role: z.string().default("user"),

    // changed snake_case to camelCase
    createDate: z.coerce.date(),
    emailVerified: z.coerce.date().nullable(),
    image: z.string().nullable(),
});

export type User = z.infer<typeof UserSchema>;

/* ============================================
   ACCOUNT (NextAuth)
   ============================================ */

export const AccountSchema = z.object({
    id: z.string(),
    userId: z.string(), // String to match User.id
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string().nullable(),
    access_token: z.string().nullable(),
    expires_at: z.number().nullable(),
    token_type: z.string().nullable(),
    scope: z.string().nullable(),
    id_token: z.string().nullable(),
    session_state: z.string().nullable(),
});

export type Account = z.infer<typeof AccountSchema>;

/* ============================================
   SESSION (NextAuth)
   ============================================ */

export const SessionSchema = z.object({
    id: z.string(),
    sessionToken: z.string(),
    userId: z.string(), // String to match User.id
    expires: z.coerce.date(),
});

export type Session = z.infer<typeof SessionSchema>;

/* ============================================
   VERIFICATION TOKEN (NextAuth)
   ============================================ */

export const VerificationTokenSchema = z.object({
    identifier: z.string(),
    token: z.string(),
    expires: z.coerce.date(),
});

export type VerificationToken = z.infer<typeof VerificationTokenSchema>;

/* ============================================
   POST
   ============================================ */

export const PostSchema = z.object({
    id: z.number(), // Int
    name: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    createdById: z.string(), // String User ID
});

export type Post = z.infer<typeof PostSchema>;

/* ============================================
   REQUEST INFO
   ============================================ */

export const RequestInfoSchema = z.object({
    requestId: z.number(), // Int
    userId: z.string(), // String
    templateId: z.number(), // Int
    instantName: z.string(),
    requestStatus: z.string(),
    requestDate: z.coerce.date(),
    endDate: z.coerce.date(),
    lastEditDate: z.coerce.date(),
    note: z.string(),
    isApprove: z.boolean(),
});

export type RequestInfo = z.infer<typeof RequestInfoSchema>;

/* ============================================
   REQUEST EDIT LOG
   ============================================ */

export const RequestEditLogSchema = z.object({
    logNo: z.number(), // Int
    userId: z.string(),
    requestId: z.number(),
    jsonData: jsonSchema, // Native JSON
    timestamp: z.coerce.date(),
});

export type RequestEditLog = z.infer<typeof RequestEditLogSchema>;

/* ============================================
   INSTANCE TEMPLATE
   ============================================ */

export const InstanceTemplateSchema = z.object({
    instanceId: z.number(),
    name: z.string(),
    cpuAmount: z.number(),
    ramAmount: z.number(),
    gpuAmount: z.number(),
    storageAmount: z.number(),
});

export type InstanceTemplate = z.infer<typeof InstanceTemplateSchema>;

/* ============================================
   OS TEMPLATE
   ============================================ */

export const OsTemplateSchema = z.object({
    osId: z.number(),
    osName: z.string(),
    imageLocation: z.string(),
    supportedPlatform: z.string(),
});

export type OsTemplate = z.infer<typeof OsTemplateSchema>;

/* ============================================
   INSTANCE OS TEMPLATE
   ============================================ */

export const InstanceOsTemplateSchema = z.object({
    templateId: z.number(),
    osId: z.number(),
    instanceId: z.number(),
});

export type InstanceOsTemplate = z.infer<typeof InstanceOsTemplateSchema>;

/* ============================================
   INSTANCE INFO
   ============================================ */

export const InstanceInfoSchema = z.object({
    instanceId: z.number(),
    userId: z.string(),
    requestId: z.number(),
    username: z.string(),
    password: z.string(),
    machineState: z.string(),
    ipAddr: z.string(),
    createDate: z.coerce.date(),
    expireDate: z.coerce.date(),
    updateBy: z.string().nullable(), // Nullable String (User ID)
    updateDate: z.coerce.date(),
});

export type InstanceInfo = z.infer<typeof InstanceInfoSchema>;

/* ============================================
   NOTIFICATION INFO
   ============================================ */

export const NotificationInfoSchema = z.object({
    notificationId: z.number(),
    requestId: z.number(),
    sendDate: z.coerce.date(),
    isSend: z.boolean(),
    messageSubject: z.string(),
    message: z.string(),
});

export type NotificationInfo = z.infer<typeof NotificationInfoSchema>;
