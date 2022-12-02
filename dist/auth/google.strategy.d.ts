import { Strategy } from 'passport-google-oauth20';
import { AuthService } from './auth.service';
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(request: any, accessToken: string, refreshToken: string, profile: any, done: any): Promise<void>;
}
export {};
