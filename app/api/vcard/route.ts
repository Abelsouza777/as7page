// app/api/vcard/route.ts
export const dynamic = 'force-dynamic'; // Garante que a API sempre rode no servidor
import { NextResponse } from 'next/server';

export async function GET() {
  // Dados do contato
  const dados = {
    nome: 'Abel',
    sobrenome: 'Souza',
    empresa: 'AS7 Engenharia',
    telefone: '+5545999799513', // Formato internacional para garantir funcionamento
    telefoneDisplay: '(45) 99979-9513',
    email: 'contato@as7engenharia.com.br', // (Opcional) Adicione se tiver
    site: 'https://as7engenharia.com.br' // (Opcional)
  };

  // Montagem do arquivo VCF (Padrão vCard 3.0)
  const vcardContent = `BEGIN:VCARD
VERSION:3.0
FN:${dados.nome} ${dados.sobrenome}
N:${dados.sobrenome};${dados.nome};;;
ORG:${dados.empresa}
TEL;TYPE=CELL;TYPE=VOICE;TYPE=PREF:${dados.telefone}
URL:${dados.site}
EMAIL:${dados.email}
END:VCARD`;

  // Retorna o arquivo com os cabeçalhos corretos para forçar o download/abertura nos contatos
  return new NextResponse(vcardContent, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${dados.nome}_${dados.empresa}.vcf"`,
    },
  });
}