declare interface PageProps {
  title: string;
}

declare interface ErrorFields {
  fieldName: string;
  message: string;
}

declare interface Breadcrumb {
  categoryId: number | undefined;
  title: string;
}

declare interface NavModulesList {
  navId: number;
  label: string;
  path: string;
}

declare interface PayloadAction<T, P> {
  type: T,
  payload: P
}

declare type LoadingTypes = 'getAll' | 'getOne' | 'post' | 'put' | 'delete' | 'idle';

declare type CommonObj<T = any> = Record<string, T>;

declare type FormObj = FormInstance<any>;
