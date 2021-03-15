import {RestEntity} from './rest-entity';

export interface Ranking extends RestEntity {
    date: date;
    ranking: number;
    player: number;
    points: number;
}
