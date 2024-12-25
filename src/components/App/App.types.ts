export type SearchBarProps = {
  onSubmit: (value: string) => void;
};

export interface Image {
  id: string;
  alt_description: string | null;
  color: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
}

export type ImageGalleryProps = {
  openModal: (src: string, alt: string) => void;
  images: Image[];
};

export type OpenModal = (src: string, alt: string) => void;

export type LoadMoreBtnProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
};

export type ImageCardProps = {
  alt: string | null;
  color: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
  openModal: OpenModal;
};

export type ErrorMessageProps = {
  message: string;
};

export type Children = {
  children: React.ReactNode;
};

export interface Photo {
  id: string;
  alt_description: string | null;
  color: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
}
