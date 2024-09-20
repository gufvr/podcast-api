export enum ContentType {
  // Common data types
  JSON = 'application/json',
  XML = 'application/xml',
  TEXT = 'text/plain',
  HTML = 'text/html',

  // Form Data Types
  FORM_URLENCODED = 'application/x-www-form-urlencoded',
  FORM_DATA = 'multipart/form-data',

  // Binary data types
  OCTET_STREAM = 'application/octet-stream',
  PDF = 'application/pdf',
  ZIP = 'application/zip',

  // Images
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  GIF = 'image/gif',
  SVG = 'image/svg+xml',

  // Audio and Video
  MP3 = 'audio/mpeg',
  MPEG = 'video/mpeg',
  MP4 = 'video/mp4',

  // Fonts
  WOFF = 'font/woff',
  WOFF2 = 'font/woff2',
}
