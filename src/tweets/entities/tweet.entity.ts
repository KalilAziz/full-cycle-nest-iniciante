// path: src/tweets/enties/tweet.entity.ts

/*
Para começar, iremos criar um type, e iremos exportá-lo. Esse type será
o type da nossa entidade. Ele será responsável por definir os atributos
que a entidade terá. No nosso caso, teremos apenas dois atributos: content
e screen_name. Ambos serão do tipo string.
 */

export type TweetProps = {
  content: string;
  screen_name: string;
};

export class Tweet {
  /* Dentro da classe, iremos criar um construtor que irá receber props
  como parâmetro. O props será do tipo TweetProps, que criamos anteriormente.
  */
  constructor(props: TweetProps) {
    /* Dentro do construtor, iremos atribuir os valores de props aos atributos
    da classe. */
    /* Para começar, iremos usar o Object.assign para atribuir os valores de
    props aos atributos da classe. */
    Object.assign(this, props);
  }

  /* Agora, iremos criar os atributos da classe. */
  content: string;
  screen_name: string;
}
