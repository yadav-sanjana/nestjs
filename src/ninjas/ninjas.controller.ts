import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

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
    getNinjaById(@Param('id') id: number) {
        return { id }
    }

    //POST /ninjas
    @Post()
    createNinja(@Body() NinjaInput: CreateNinjaDto) {
        return {
            name: NinjaInput.name
        }
    }

    //PUT /ninjas/:id
    @Put(':id')
    updateNinja(@Param('id') id: number, @Body() updateNinjaInput: UpdateNinjaDto) {
        return {
            id,
            name: updateNinjaInput.name
        }
    }

    //DELETE /ninjas/:id
    @Delete(':id')
    deleteNinja(@Param('id') id: number) {
        return {}
    }
}


