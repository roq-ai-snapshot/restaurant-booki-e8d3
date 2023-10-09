import { EmployeeInterface } from 'interfaces/employee';
import { MenuInterface } from 'interfaces/menu';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  name: string;
  description?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  menu?: MenuInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    menu?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  user_id?: string;
}
