/**
 * Created by skyy on 9/23/16.
 */
export class HeroForm{
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ){}
}