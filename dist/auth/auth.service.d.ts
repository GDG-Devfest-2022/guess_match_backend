import { UsersService } from 'src/users/users.service';
export declare enum Provider {
    GOOGLE = "google"
}
export declare class AuthService {
    private readonly usersService;
    private readonly JWT_SECRET_KEY;
    constructor(usersService: UsersService);
    validateOAuthLogin(profile: any, provider: Provider): Promise<string>;
}
