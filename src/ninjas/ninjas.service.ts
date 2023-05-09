import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: "sanjana", weapon: "darts" },
        { id: 1, name: "shivam", weapon: "stars" }
    ]

    getNinjas(weapon?: 'stars' | 'darts') {
        if (weapon) {
            return this.ninjas.filter((ninjas) => ninjas.weapon === weapon)
        }

        return this.ninjas
    }
}
