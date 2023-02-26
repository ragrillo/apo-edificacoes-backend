import IBaseService from './base.service';
import { IUsuarioRepository } from '../repositories/usuario.repository';
import { UsuarioModel, UsuarioDTO, EdificacaoType, CargoType } from '../models/usuario.model';
import { IHashPasswordAdapter } from '../adapters/hash-password.adapter';
import { ITokenJWTAdapter } from '../adapters/token-jwt.adapter';

type TokenPayload = {
  id: string;
  cargo: CargoType;
  edificacao: EdificacaoType | undefined;
};

interface IUsuarioService extends IBaseService<UsuarioModel, UsuarioDTO> {
  login(email: string, senha: string): Promise<string>;
}

class UsuarioService implements IUsuarioService {
  constructor(
    private readonly repository: IUsuarioRepository,
    private readonly hashPasswordAdapter: IHashPasswordAdapter,
    private readonly tokenJWTAdapter: ITokenJWTAdapter,
  ) {}

  async create(data: UsuarioDTO): Promise<void> {
    const payload: UsuarioDTO = { ...data, senha: await this.hashPasswordAdapter.hash(data.senha) };
    await this.repository.create(payload);
  }

  async findAll(): Promise<UsuarioModel[]> {
    const usuarios: UsuarioModel[] = await this.repository.findAll();

    return usuarios;
  }

  async findById(id: string): Promise<UsuarioModel> {
    const usuario: UsuarioModel = await this.repository.findById(id);

    return usuario;
  }

  async findByEmail(email: string): Promise<UsuarioModel> {
    const usuario: UsuarioModel = await this.repository.findByEmail(email);

    return usuario;
  }

  async update(id: string, data: UsuarioDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async remove(id: string): Promise<void> {
    await this.repository.remove(id);
  }

  async login(email: string, senha: string): Promise<string> {
    const usuario: UsuarioModel = await this.repository.findByEmail(email);

    if (!usuario) {
      throw new Error('Email ou senha incorretos');
    }

    const senhasCoincidem: boolean = await this.hashPasswordAdapter.compare(senha, usuario.senha);

    if (!senhasCoincidem) {
      throw new Error('Email ou senha incorretos');
    }

    const { id, cargo, edificacao } = usuario;
    const payload: TokenPayload = { id, cargo, edificacao };

    const token: string = await this.tokenJWTAdapter.generate(payload);

    return token;
  }
}

export { IUsuarioService, UsuarioService };
