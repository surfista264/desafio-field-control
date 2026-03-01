import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private cards: any[] = [];

  buscarTodos() {
    return this.cards;
  }

  adicionar(novoCard: any) {
    novoCard.id = Date.now(); 
    if (!novoCard.status) novoCard.status = 'A Fazer';
    this.cards.push(novoCard);
    return novoCard;
  }

  atualizarStatus(id: string, novoStatus: string) {
    const card = this.cards.find(c => c.id === Number(id));
    if (card) {
      card.status = novoStatus;
      return card;
    }
    return null;
  }

  excluir(id: string) {
    const index = this.cards.findIndex(c => c.id === Number(id));
    if (index !== -1) {
      this.cards.splice(index, 1);
      return { success: true };
    }
    return { success: false };
  }
}