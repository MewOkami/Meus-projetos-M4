import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import RealEstate from "./RealEstate.entity";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (r) => r.category)
  realEstate: RealEstate;
}
