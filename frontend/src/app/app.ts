import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Coluna } from './kanban.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit { 
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef); 
  
  novoTitulo: string = '';
  novaDescricao: string = '';
  kanban: Coluna[] = [
    { nome: 'A Fazer', cards: [] },
    { nome: 'Em Andamento', cards: [] },
    { nome: 'Comcluído', cards: [] }
  ];

  ngOnInit() {
    this.carregarCards();
  }

  carregarCards() {
    this.http.get<any[]>('http://localhost:3000/cards').subscribe({
      next: (cards) => {
        this.kanban.forEach(col => col.cards = []);

        cards.forEach(card => {
          const colunaAlvo = this.kanban.find(col => col.nome === card.status);
          if (colunaAlvo) {
            colunaAlvo.cards.push(card);
          } else {
            this.kanban[0].cards.push(card);
          }
        });

        this.kanban = [...this.kanban];
        this.cdr.detectChanges(); 
        console.log('Cards carregados e tela forçada a atualizar!');
      },
      error: (err) => console.error('Erro ao buscar cards:', err)
    });
  }

  adicionarCard() {
    if (!this.novoTitulo) return;
    const cardParaEnviar = { titulo: this.novoTitulo, descricao: this.novaDescricao, status: 'A Fazer' };

    this.http.post('http://localhost:3000/cards', cardParaEnviar).subscribe(() => {
      this.novoTitulo = '';
      this.novaDescricao = '';
      this.carregarCards(); 
    });
  }

  moverParaProxima(colunaIndex: number, cardIndex: number) {
    const card = this.kanban[colunaIndex].cards[cardIndex];
    const proxima = this.kanban[colunaIndex + 1];

    if (proxima && card.id) {
      this.http.patch(`http://localhost:3000/cards/${card.id}`, { status: proxima.nome })
        .subscribe(() => this.carregarCards());
    }
  }

  voltarParaAnterior(colunaIndex: number, cardIndex: number) {
    const card = this.kanban[colunaIndex].cards[cardIndex];
    const anterior = this.kanban[colunaIndex - 1]; 

    if (anterior && card.id) {
      this.http.patch(`http://localhost:3000/cards/${card.id}`, { status: anterior.nome })
        .subscribe(() => this.carregarCards());
    }
  }

  excluirCard(card: any) {
    if (confirm('Tem certeza que deseja apagar este card?')) {
      this.http.delete(`http://localhost:3000/cards/${card.id}`).subscribe({
        next: () => {
          console.log('Apagado do banco!');
          this.carregarCards();
        },
        error: (err) => console.error('Erro ao excluir:', err)
      });
    }
  }
}