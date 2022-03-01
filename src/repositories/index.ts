import { Role } from "../entities/Role";
import { User } from "../entities/User";
import { getRepository } from "typeorm";
import { Product } from "../entities/Product";
import { Permission } from "../entities/Permission";

export const UserRepository = () => getRepository(User);

export const RoleRepository = () => getRepository(Role);

export const PermissionRepository = () => getRepository(Permission);

export const ProductRepository = () => getRepository(Product);
