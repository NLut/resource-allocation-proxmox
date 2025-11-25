import { type DefaultUser, type DefaultSession } from "@auth/core/types";
import "@auth/core/types";

declare module "@auth/core/types" {
    interface AdapterUser extends DefaultUser {
        role: string; // custom field
    }

    interface User extends DefaultUser {
        role: string; // custom field
    }

    interface Session extends DefaultSession {
        user: {
            id: string;
            role: string;
        } & DefaultSession["user"];
    }
}
