import { RestEntity } from "./rest-entity";

import hand = PhysicalCaracteristic.hand;
import surface = Tourney.surface;

export interface Match extends RestEntity {
    tourney_id: number;
    tourney_name: string;
    surface: surface;
    draw_size: number;
    tourney_level: string;
    tourney_date: date;
    winner_id: number;
    winner_seed: number;
    winner_entry: number;
    winner_name: string;
    winner_hand: hand;
    winner_ht: number;
    winner_ioc: string;
    winner_age: number;
    loser_id: number;
    loser_seed: number;
    loser_entry: number;
    loser_name: string;
    loser_hand: hand;
    loser_ht: number;
    loser_ioc: string;
    loser_age: number;
    score: string;
    best_of: number;
    round: number;
    minutes: number;
    w_ace: number;
    w_df: number;
    w_svpt: number;
    w_1stIn: number;
    w_1stWon: number;
    w_2ndWon: number;
    w_SvGms: number;
    w_bpSaved: number;
    w_bpFaced: number;
    l_ace: number;
    l_df: number;
    l_svpt: number;
    l_1stIn: number;
    l_1stWon: number;
    l_2ndWon: number;
    l_SvGms: number;
    l_bpSaved: number;
    l_bpFaced: number;
    winner_rank: number;
    winner_rank_points: number;
    loser_rank: number;
    loser_rank_points: number;
}
