import {RestEntity} from './rest-entity';

import hand = PhysicalCaracteristic.hand;

export interface Player extends RestEntity {
    firstname: string;
    lastname: string;
    handed: hand;
    birthday: date;
    nationality: string;
}
