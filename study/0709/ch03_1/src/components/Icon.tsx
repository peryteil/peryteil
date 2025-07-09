import type {CSSProperties, FC} from 'react';

export type IconProps = {
name: string
style?: CSSProperties;
}

export const Icon: FC<IconProps> = ({name, style}) => {
    return <span className='material-icons' style={style}>
        {name}
    </span>
}