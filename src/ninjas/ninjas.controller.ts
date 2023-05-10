import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService) { }

    //GET  /ninjas
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'darts') {
        // const service = new NinjasService()

        return this.ninjaService.getNinjas(weapon)
    }

    //GET /ninjas/:id
    @Get(':id')
    getNinjaById(@Param('id') id: string) {
        return this.ninjaService.getNinja(+id)
    }

    //POST /ninjas
    @Post()
    @UseGuards(BeltGuard)
    createNinja(@Body() NinjaInput: CreateNinjaDto) {
        return this.ninjaService.createNinja(NinjaInput)
    }

    //PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: number, @Body() updateNinjaInput: UpdateNinjaDto) {
        return this.ninjaService.updateNinja(id, updateNinjaInput)
    }

    //DELETE /ninjas/:id
    @Delete(':id')
    deleteNinja(@Param('id') id: number) {
        return this.ninjaService.removeNinja(id)
    }
}


