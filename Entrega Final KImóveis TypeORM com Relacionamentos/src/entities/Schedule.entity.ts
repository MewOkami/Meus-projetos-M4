import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import RealEstate from "./RealEstate.entity";

@Entity("schedules")
export default class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedule)
  user: User;

  @ManyToOne(() => RealEstate, (r) => r.schedule)
  realEstate: RealEstate;
}
