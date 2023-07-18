export class Prato{
  id!: number;
  nome!: string;
  tipo!: string;
  descricao!: string;
  preco!: number;
  ingredientes!: Ingrediente[];
  qtd?: number;
  img?: string;
}

export class Ingrediente {
  nome!: string;
}
