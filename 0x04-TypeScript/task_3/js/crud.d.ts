import { RowID, RowElement } from './interface';

declare namespace CRUD {
 export function insertRow(row: RowElement): number;

 export function deleteRow(rowId: RowID): void;

 export function updateRow(rowId: RowID, row: RowElement): RowID;
}

export = CRUD;
