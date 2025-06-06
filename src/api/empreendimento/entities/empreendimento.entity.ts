import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class Empreendimento {
  @ApiResponseProperty({ type: Number })
  @Expose()
  id: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  nome: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  descricao: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  endereco: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  cidade: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  estado: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  cep: string;

  @ApiResponseProperty({ type: String })
  @Expose()
  obs: string;

  @ApiResponseProperty({ type: Boolean })
  @Expose()
  status: boolean;

  @ApiResponseProperty({ type: Number })
  @Expose()
  valor_cert: number;

  @ApiResponseProperty({ type: String })
  @Expose()
  tag: string;

  @ApiResponseProperty({ type: Number })
  @Expose()
  construtoraId: number;

  @ApiResponseProperty({ type: Number })
  @Expose()
  responsavelId: number;

  @ApiResponseProperty({ type: Date })
  @Expose()
  createdAt: Date;

  @ApiResponseProperty({ type: Date })
  @Expose()
  updatedAt: Date;

  constructor(partial: Partial<Empreendimento>) {
    Object.assign(this, partial);
  }
}
