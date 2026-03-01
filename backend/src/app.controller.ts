import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cards')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  pegarCards() {
    return this.appService.buscarTodos();
  }

  @Post()
  receberCard(@Body() card: any) {
    return this.appService.adicionar(card);
  }

  @Patch(':id')
  atualizarStatus(@Param('id') id: string, @Body() corpo: { status: string }) {
    return this.appService.atualizarStatus(id, corpo.status);
  }

  @Delete(':id')
  removerCard(@Param('id') id: string) {
    return this.appService.excluir(id);
  }
}