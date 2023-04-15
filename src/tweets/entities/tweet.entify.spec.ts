// path: src/tweets/enties/tweet.entity.spec.ts
import { Tweet } from './tweet.entity';

/* Agora iremos testar nossa entidade */

describe('Tweet Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Kalil Aziz',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Kalil Aziz');
  });

  it('should not create a tweet content screen_name not expect', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Kalil Aziz',
    });

    expect(tweet.screen_name).not.toBe('Kalil Aziz Santos Chami');
    expect(tweet.content).not.toBe('Hello World12313');
  });
});
