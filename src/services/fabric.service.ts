import bcrypt from 'bcrypt';
import DB from '@databases';
import { CreateFabricDto } from '@dtos/fabric.dto';
import { HttpException } from '@exceptions/HttpException';
import { Fabric } from '@interfaces/fabric.interface';
import { isEmpty } from '@utils/util';

class FabricService {
  public fabric = DB.Fabric;

  public async findAllFabric(): Promise<Fabric[]> {
    const allFabric: Fabric[] = await this.fabric.findAll();
    return allFabric;
  }

  public async findFabricById(fabricId: number): Promise<Fabric> {
    if (isEmpty(fabricId)) throw new HttpException(400, "You're not fabricId");

    const findFabric: Fabric = await this.fabric.findByPk(fabricId);
    if (!findFabric) throw new HttpException(409, "You're not fabric");

    return findFabric;
  }

  public async createFabric(fabricData: CreateFabricDto): Promise<Fabric> {
    if (isEmpty(fabricData)) throw new HttpException(400, "You're not fabricData");
    const createFabricData: Fabric = await this.fabric.create({ ...fabricData, });
    return createFabricData;
  }

  public async updateFabric(fabricId: number, fabricData: CreateFabricDto): Promise<Fabric> {
    if (isEmpty(fabricData)) throw new HttpException(400, "You're not fabricData");

    const findFabric: Fabric = await this.fabric.findByPk(fabricId);
    if (!findFabric) throw new HttpException(409, "You're not fabric");

    await this.fabric.update({ ...fabricData, }, { where: { id: fabricId } });

    const updateFabric: Fabric = await this.fabric.findByPk(fabricId);
    return updateFabric;
  }

  public async deleteFabric(fabricId: number): Promise<Fabric> {
    if (isEmpty(fabricId)) throw new HttpException(400, "You're not fabricId");

    const findFabric: Fabric = await this.fabric.findByPk(fabricId);
    if (!findFabric) throw new HttpException(409, "You're not fabric");

    await this.fabric.destroy({ where: { id: fabricId } });

    return findFabric;
  }
}

export default FabricService;
