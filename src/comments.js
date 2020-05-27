import React from "React";
import { Datagrid, TextField, ReferenceField } from "react-admin";

export const Comment = (props) => (
  <Datagrid rowClick="edit">
    <TextField source="id" />
    <ReferenceField label="User" source="userId" reference="users">
      <TextField source="name" />
    </ReferenceField>
    <TextField source="title" />
    <TextField source="body" />
  </Datagrid>
);
