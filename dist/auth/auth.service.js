"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.Provider = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const users_service_1 = require("../users/users.service");
var Provider;
(function (Provider) {
    Provider["GOOGLE"] = "google";
})(Provider = exports.Provider || (exports.Provider = {}));
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
        this.JWT_SECRET_KEY = 'VERY_SECRET_KEY';
    }
    async validateOAuthLogin(profile, provider) {
        try {
            const googleId = profile.id;
            let user = await this.usersService.findoneByGoogleId(+googleId);
            if (!user)
                user = await this.usersService.create({
                    googleId: profile.id,
                    name: profile.name.givenName,
                    email: profile.emails[0].value,
                });
            const payload = {
                googleId,
                provider,
            };
            const jwt = (0, jsonwebtoken_1.sign)(payload, this.JWT_SECRET_KEY, {
                expiresIn: 3600,
            });
            return jwt;
        }
        catch (err) {
            throw new common_1.InternalServerErrorException('validateOAuthLogin', err.message);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map