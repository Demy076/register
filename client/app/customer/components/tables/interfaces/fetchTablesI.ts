interface Table {
  id: number;
  created_at: string;
  updated_at: string;
  table_number: number;
  active: boolean;
  barcode: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  totalPages: number;
  itemsTotal: number;
  itemOnPage: number;
  timeOfRequest: string;
}

interface TableFetchResponse {
  message: string;
  tablesWithBarcode: Table[];
  pagination: Pagination;
}

export { Table, Pagination, TableFetchResponse };
