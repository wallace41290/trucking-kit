export type FileType = 'Company' | 'Driver';

export interface File {
  description: string;
  filePath: string;
  name: string;
  type: FileType;
}
