https://tcc-gen.herokuapp.com/

# Tcc-Gen

O TCC Manager é um sistema WEB destinado ao gerenciamento de
Trabalhos de Conclusão de Curso, para a instituições de cursos superiores que têm
como requisito para obtenção do diploma o desenvolvimento de um trabalho de
conclusão de curso (TCC).
Entretanto, uma dificuldade encontrada por grande parte dos alunos na fase
de conclusão do curso é encontrar um tema adequado e, juntamente, um orientador
para o desenvolvimento do TCC. O desenvolvimento do sistema aqui descrito visa a
melhora da comunicação entre alunos e professores para que a fase de escolha de
temas e desenvolvimento dos trabalhos gere menos frustrações para os discentes e
conflitos de informações.
Seguindo as normas para o trabalho de conclusão de curso do TADS, os
seguintes atores terão acesso ao sistema: Coordenador: O coordenador é o
professor da que ministra a disciplina de TCC. Esse coordenador pode acessar o
sistema tanto como professor como coordenador, tendo controle sobre todo o
sistema; Professor: O professor é o responsável pela orientação dos alunos
matriculados em TCC, possuindo acesso suficiente para cadastramento de seus
trabalhos e controle dos trabalhos já cadastrados; Aluno: O aluno é aquele que se
matriculou na disciplina de TCC e tem permissões suficientes para observar os
trabalhos atualmente cadastrados no sistema.
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/jacksonWiller/nodetest2.git
    $ cd nodetest2
    $ npm install

## Running the project

    $ npm start
