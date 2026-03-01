export interface Card {
  id: number;
  titulo: string;
  descricao: string;
}

export interface Coluna {
  nome: string;
  cards: Card[];
}