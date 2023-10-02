import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import { Role } from './roles.model';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Creating a role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({summary: 'Data above role'})
    @ApiResponse({status: 200})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
