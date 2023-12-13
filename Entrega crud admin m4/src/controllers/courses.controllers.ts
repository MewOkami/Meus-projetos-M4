import { Request, Response } from "express";
import { Courses, CoursesRead, UserCourses } from "../interfaces";
import { coursesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const course: Courses = await coursesServices.create(req.body);
  return res.status(201).json(course);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const courses: CoursesRead = await coursesServices.read();
  return res.status(200).json(courses);
};

const retriever = async (req: Request, res: Response): Promise<Response> => {
  const course: Courses = await coursesServices.retriever(req.params.id);
  return res.status(200).json(course);
};

const createRegister = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId, courseId } = req.params;
  await coursesServices.createRegister(userId, courseId);
  return res
    .status(201)
    .json({ message: "User successfully vinculed to course" });
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const { courseId, userId } = req.params;
  await coursesServices.destroy(courseId, userId);
  return res.status(200).json();
};

export default { create, read, retriever, createRegister, destroy };
