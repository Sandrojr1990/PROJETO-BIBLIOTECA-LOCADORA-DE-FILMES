// Array global de usuários
const usuarios = [];

// Função utilitária global para padronizar nomes
function padronizarNome(nome) {
    return nome.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '');
}

// ...existing code...

// Após a definição da classe Usuario:

// ...existing code...

// Após a definição da classe Usuario:
// Usuários manuais padrão
// ...existing code...

// Classe Livro

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.emprestado = false;

    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Livro ${this.titulo} emprestado!.`);
        } else {
            console.log(`Livro ${this.titulo} já está emprestado!.`);
        }  
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Livro ${this.titulo} devolvido!.`);
        } else {
            console.log(`Livro ${this.titulo} não está emprestado!.`);
        }   
    }       
}

// Classe Filme

class Filme {
    constructor(titulo, diretor) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.emprestado = false;
    }

    emprestar() {
        if (!this.emprestado) {
            this.emprestado = true;
            console.log(`Filme ${this.titulo} emprestado!.`);
        } else {
            console.log(`Filme ${this.titulo} já está emprestado!.`);
        }
    }

    devolver() {
        if (this.emprestado) {
            this.emprestado = false;
            console.log(`Filme ${this.titulo} devolvido!.`);
        }
    }


}

// Classe Usuário

class Usuario {
    constructor(nome) {
        this.nome = nome;
    this.itensEmprestados = [];
    }

    pegarItem(item) {
        if (this.itensEmprestados.length >= 3) {
            console.log(`Usuário ${this.nome} já atingiu o limite de 3 itens emprestados.`);
            return;
        }
        if (!item.emprestado) {
            item.emprestar();
            this.itensEmprestados.push(item);
            console.log(`Usuário ${this.nome} pegou o item ${item.titulo}.`);
        } else {
            console.log(`Item ${item.titulo} já está emprestado!`);
        }
    }

    devolverItem(item) {
    const index = this.itensEmprestados.indexOf(item);
        if (index !== -1) {
        item.devolver();
    this.itensEmprestados.splice(index, 1);
        console.log(`Usuário ${this.nome} devolveu o item ${item.titulo}.`);
        } else {
            console.log(`Usuário ${this.nome} não tem o item ${item.titulo} emprestado.`);
        }
    }

    listarItens() {
        console.log(`Itens emprestados por ${this.nome}:`);
        this.itensEmprestados.forEach((item) => {
            console.log(`- ${item.titulo}`);
        });
    }
}

// Classe Biblioteca

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro ${livro.titulo} adicionado à biblioteca.`);
    }

    listarLivros() {
        console.log('Livros da biblioteca:');
        this.livros.forEach((livro) => {
            console.log(`- ${livro.titulo} (${livro.autor}) - ${livro.emprestado ? 'Emprestado' : 'Disponivel'}`);
        });
    }
}

// Classe Locadora
class Locadora {
    constructor() {
        this.filmes = [];
    }

    adicionarFilme(filme) {
        this.filmes.push(filme);
        console.log(`Filme ${filme.titulo} adicionado à locadora.`);
    }

    listarFilmes() {
        console.log('Filmes da locadora:');
        this.filmes.forEach((filme) => {
            console.log(`- ${filme.titulo} (${filme.diretor}) - ${filme.emprestado ? 'Emprestado' : 'Disponìvel'}`);
        });
    }
}

// Criar objetos

const biblioteca = new Biblioteca();
const locadora = new Locadora();

// Adicionar livros e filmes

const livro1 = new Livro('O Alienista', 'Machado de Assis');
const livro2 = new Livro('A Hora da Estrela', 'Clarice Lispector');
const livro3 = new Livro('O Meu Pé de Laranja Lima', 'José Mauro de Vasconcelos');
const livro4 = new Livro('Dom Casmurro', 'Machado de Assis');
// ...existing code...

// Criar objetos principais

const filme1 = new Filme('Cidade de Deus', 'Fernando Meirelles');
const filme2 = new Filme('Tropa de Elite', 'José Padilha');
const filme3 = new Filme('Central do Brasil', 'Walter Salles');
const filme4 = new Filme('O Auto da Compadecida', 'Guel Arraes');

// Adicionando livros e filmes às coleções

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);
biblioteca.adicionarLivro(livro4);
locadora.adicionarFilme(filme1);
locadora.adicionarFilme(filme2);
locadora.adicionarFilme(filme3);
locadora.adicionarFilme(filme4);

// Listando livros e filmes disponíveis

biblioteca.listarLivros();
locadora.listarFilmes();

const readline = require('readline')
const prompt = readline.createInterface({
    input: process.stdin, output: process.stdout
})

function perguntar(pergunta){
    return new Promise((resolve) => {
        prompt.question(pergunta, (resposta) => {
            resolve(resposta.trim());
        });
    });
}

async function MostraMenu() {
    console.log('\nMenu de opções:');
    console.log('1 - Adicionar Livro');
    console.log('2 - Adicionar Filme');
    console.log('3 - Adicionar Usuário');
    console.log('4 - Listar Livros');
    console.log('5 - Listar Filmes');
    console.log('6 - Pegar Livro Emprestado');
    console.log('7 - Devolver Livro Emprestado');
    console.log('8 - Pegar Filme Emprestado');
    console.log('9 - Devolver Filme Emprestado');
    console.log('0 - Sair');

    while (true) {

        const opcao = await perguntar('Escolha uma opção:');

        switch (opcao) {
            case '0':
                if (usuarios.length === 0) {
                    console.log('Nenhum usuário cadastrado.');
                } else {
                    console.log('Usuários cadastrados:');
                    usuarios.forEach(usuario => console.log('- [' + usuario.nome + ']'));
                }
                break;
            case '1':
                const tituloLivro = await perguntar('Digite o título do livro:');
                const autorLivro = await perguntar('Digite o autor do livro:');
                biblioteca.adicionarLivro(new Livro(tituloLivro, autorLivro));
                break;
                case '2':
                    const tituloFilme = await perguntar('Digite o título do filme:');
                    const diretorFilme = await perguntar('Digite o diretor do filme:');
                    adicionarFilme(new Filme(tituloFilme, diretorFilme));
                    break;
                    case '3':
                        const nomeUsuario = await perguntar('Digite o nome do usuário:');
                        const nomePadronizado = padronizarNome(nomeUsuario);
                        // Verifica se já existe usuário com esse nome padronizado
                        if (usuarios.some(usuario => usuario.nome === nomePadronizado)) {
                            console.log('Usuário já cadastrado!');
                        } else {
                            const usuario = new Usuario(nomePadronizado);
                            usuarios.push(usuario);
                            console.log(`Usuário ${nomeUsuario} adicionado com sucesso!`);
                        }
                        break;
                        case '4':
                            biblioteca.listarLivros();
                            break;
                            case '5':
                                locadora.listarFilmes();
                                break;
                                case '6':
                                    const tituloLivroEmprestado = await perguntar('Digite o título do livro que deseja emprestar:');
                                    const livroEmprestimo = biblioteca.livros.find(livro => livro.titulo === tituloLivroEmprestado);
                                    if (livroEmprestimo) {
                                        const nomeUsuarioEmprestimo = await perguntar( 'Digite o nome do usuário que deseja pegar o livro emprestado:');
                                        const usuarioEncontrado = usuarios.find(usuario => usuario.nome === padronizarNome(nomeUsuarioEmprestimo));
                                        if (usuarioEncontrado) {
                                            usuarioEncontrado.pegarItem(livroEmprestimo);
                                        } else {
                                            console.log('Usuário não encontrado!');  
                                         }
                                        } else {
                                            console.log('Livro não encontrado!');
                                        }
                                        break;
                                        case '7':
                                            const tituloLivroDevolvido = await perguntar('Digite o título do livro que deseja devolver:')
                                            const livroDevolucao = biblioteca.livros.find(livro => livro.titulo === tituloLivroDevolvido);
                                            if (livroDevolucao) {
                                                const nomeUsuarioDevolucao = await perguntar('Digite o nome do usuário que deseja devolver o livro:');
                                                const usuarioEncontrado = usuarios.find(usuario => usuario.nome === padronizarNome(nomeUsuarioDevolucao));
                                                if (usuarioEncontrado) {
                                                    usuarioEncontrado.devolverItem(livroDevolucao);
                                                } else {
                                                    console.log('Usuário não encontrado!');
                                                }
                                                 } else {
                                                    console.log('Livro não encontrado!');
                                                }
                                                break;
                                                case '8':
                                                    const tituloFilmeEmprestado = await perguntar('Digite o título do filme que deseja emprestar:');
                                                    const filmeEmprestimo = locadora.filmes.find(filme => filme.titulo === tituloFilmeEmprestimo);
                                                    if (filmeEmprestimo) {
                                                        const nomeUsuarioEmprestimo = await perguntar('Digite o nome do usuário que deseja pegar o filme emprestado:');
                                                        const usuarioEncontrado = usuarios.find(usuario => usuario.nome === padronizarNome(nomeUsuarioEmprestimo));
                                                        if (usuarioEncontrado) {
                                                            usuarioEncontrado.pegarItem(filmeEmprestimo);
                                                         } else {
                                                            console.log('Usuário não encontrado!');
                                                        }
                                                         } else {
                                                            console.log('Filme não encontrado!');
                                                         }
                                                            break;
                                                            case '9':
                                                                const tituloFilmeDevolvido = await perguntar('Digite o título do filme que deseja devolver:');
                                                                const filmeDevolucao = locadora.filmes.find(filme => filme.titulo === tituloFilmeDevolucao);
                                                                if (filmeDevolucao) {
                                                                    const nomeUsuarioDevolucao = await perguntar('Digite o nome do usuário que deseja devolver o filme:');
                                                                    const usuarioEncontrado = usuarios.find(usuario => usuario.nome === padronizarNome(nomeUsuarioDevolucao));
                                                                    if (usuarioEncontrado) {
                                                                        usuarioEncontrado.devolverItem(filmeDevolucao);
                                                                    } else {
                                                                        console.log('Usuário não encontrado!');
                                                                    }
                                                                    } else {
                                                                        console.log('Filme não encontrado!');
                                                                    }
                                                                    break;
                                                                    case '0':
                                                                        console.log('Saindo');
                                                                        prompt.close();
                                                                        return;
                                                                        default:
                                                                            console.log('Opção inválida! por favor, tente novamente.');


                                            }

                                           
                                           
                                        
}                                   }
        
    
                                        MostraMenu();                                        
