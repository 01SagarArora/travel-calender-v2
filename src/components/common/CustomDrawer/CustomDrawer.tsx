import Drawer from "@mui/material/Drawer"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import CloseIcon from '@mui/icons-material/Close';
import { CustomDrawerInterface } from "./CustomDrawer.type"

const CustomDrawer = (props: CustomDrawerInterface) => {

    return <Drawer
        anchor='right'
        style={{zIndex: props?.zIndex ? props.zIndex : '', width: props?.width ? props.width : ''}}
        open={props.isOpen?true:false }
        // onBackdropClick={() => props.handleBackDrop("BACKDROP")}
        onClose={() => props.handleBackDrop("BACKDROP")}
        PaperProps={{
            sx: {

                background: 'transparent',
                overflow: 'hidden',
                boxShadow: 'none',
                minWidth: props.minWidth,
                width: props.width
            }
        }}
    >
        <Stack
            flexDirection={'row'}
        >
            <Stack height={'100vh'}>
                <Button
                    onClick={() => {
                        props.handleBackDrop("CLOSE")
                    }}
                    style={{
                        background: '#000',
                        color: '#fff',
                        padding: '6px 0px',
                        minWidth: '40px'
                    }}
                >
                    <CloseIcon />
                </Button>
            </Stack>
            <Container
                className={props.padding}
                
                style={{ background: 'white', overflowY: 'auto', height: '100vh',maxWidth: '100%' }}
            >
                <div
                    style={{
                        zIndex: 10,
                        paddingBottom: '10px',
                        position: 'sticky',
                        top: 0,
                        background: '#fff'
                    }}
                >
                    <Stack
                        flexDirection={'row'}
                        gap={2}
                        alignItems={'center'}
                    >
                        <div>{props.titleIcon}</div>
                        <div className='selection-dialog-header'>{props.title}</div>
                    </Stack>
                    <Divider />
                </div>
                {props.children}
            </Container>
        </Stack>
    </Drawer>
}

export default CustomDrawer