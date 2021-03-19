class TextProcessing {
  #textSplit: string[];
  #textDiv: HTMLDivElement;
  _pause: boolean = false;
  #count: number = 0;
  _lpm: number = 100;

  constructor() {
    this.#textDiv = document.querySelector('div#text') as HTMLDivElement;
  }

  start(): void {
    let textSplitRaw: string[] = (document.querySelector(
      'textarea#input'
    ) as HTMLTextAreaElement).value.split(/\s/g);
    if (textSplitRaw.length === 0)
      this.#textDiv.innerHTML = '[NO TEXT ENTERED]';
    textSplitRaw = textSplitRaw.filter((value: string) => value !== '');
    this.#textSplit = [];
    for (let i: number = 0; i < textSplitRaw.length; i++) {
      const text: string = textSplitRaw[i];
      if (!text.match(/\w/)) continue;
      this.#textSplit.push(text.replace(/([\[\]]|-(?![A-Z]))/g, ''));
    }
    console.log(this.#textSplit);
    this.#count = 0;
    this.loop();
  }

  private loop(): void {
    if (this.#count === this.#textSplit.length) {
      this.#textDiv.innerHTML = '[BLANK]';
      return;
    }
    this.#textDiv.innerHTML = this.#textSplit[this.#count];
    this.#count++;
    this.nextWord();
  }

  nextWord(): void {
    if (this.#count <= this.#textSplit.length && !this._pause)
      setTimeout(
        this.loop.bind(this),
        (((1000 * 60 * this.#textSplit[this.#count - 1].length) / 3) *
          (this.#textSplit[this.#count - 1].match(/[\.\?!]/g) ? 2 : 1) *
          (this.count(this.#textSplit[this.#count - 1]) * 10 + 1)) /
          this._lpm
      );
  }

  private count(str: string): number {
    const re = /\d/g;
    return ((str || '').match(re) || []).length;
  }
}
