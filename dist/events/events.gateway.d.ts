import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket } from 'socket.io';
export declare class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    afterInit(): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleMessage(socket: Socket, { roomName, message }: {
        roomName: any;
        message: any;
    }): {
        username: string;
        message: any;
    };
    handleCreateRoom(socket: Socket, roomName: string): Promise<{
        success: boolean;
        payload: string;
    }>;
    handleJoinRoom(socket: Socket, roomName: string): {
        success: boolean;
    };
    handleLeaveRoom(socket: Socket, roomName: string): {
        success: boolean;
    };
}
