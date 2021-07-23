import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://fabio:p1s32005@cluster0.gqwoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
