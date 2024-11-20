import { Context } from "hono";
import { StudentModel } from "../model/models";

// Read
export const getStudent = async (c: Context) => {
    return c.json(StudentModel);
};

export const addStudent = async (c: Context) => {
    const { lastname } = await c.req.json();

    StudentModel.push(lastname);

    return c.json(StudentModel);
};

export const updateStudent = async (c: Context) => {
    const { studentId } = c.req.param();
    const { firstname } = await c.req.json();

    StudentModel[StudentModel.length - Number(studentId)] = firstname;

    return c.json(StudentModel);
};

export const deleteStudent = async (c: Context) => {
    const { studentId } = c.req.param();

    StudentModel.splice(Number(studentId), 1);

    return c.json(StudentModel);
};
