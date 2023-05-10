import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
    private ninjasLog = [
        { id: 0, name: "sanjana", weapon: "darts" },
        { id: 1, name: "shivam", weapon: "stars" }
    ]

    getNinjas(weapon?: 'stars' | 'darts') {
        if (weapon) {
            return this.ninjasLog.filter((ninjas) => ninjas.weapon === weapon)
        }
        return this.ninjasLog
    }

    getNinja(id: number) {
        const ninja = this.ninjasLog.find((ninja) => ninja.id === id)
        if (!ninja) {
            throw new Error("ninja not found")
        }
        return ninja
    }

    createNinja(CreateNinjaDto: CreateNinjaDto) {
        const newNinja = {
            ...CreateNinjaDto,
            id: Date.now()
        }
        this.ninjasLog.push(newNinja)
        return newNinja
    }


    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
        const ninjasUpdate = this.ninjasLog.map((ninja) => {
            if (ninja.id === id) {
                return { ...ninja, ...updateNinjaDto }
            }

            return ninjasUpdate
        })
        return this.getNinja(id)
    }

    removeNinja(id: number) {
        const toRemove = this.getNinja(id)
        this.ninjasLog = this.ninjasLog.filter((ninja) => ninja.id !== id)

        return toRemove
    }


}
