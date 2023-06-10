import { Module } from "@nestjs/common";
import { AppController } from "./app.contorller";

@Module({ controllers: [AppController] })
export class AppModule {}
