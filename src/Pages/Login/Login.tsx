import { Box, FormControl, Image, Input, Text, VStack } from 'native-base'
import Logo from '../../assets/Logo.png'


export default function Login() {
    return (
        <>
            {/* esse vstack é como se fosse uma view, ou div */}
            <VStack flex={1} alignItems="center" mt={20} >
                <Image source={Logo} alt='Imagem Voll'></Image>

                <Text fontSize='2xl'
                    fontWeight={'bold'}
                    color={'gray.500'}
                >
                    Faça Login em sua conta
                </Text>
                <Box>
                    <FormControl>
                        <FormControl.Label>
                            Email
                        </FormControl.Label>
                        <Input
                            w={'80%'}
                            placeholder='Insita seu endereço de email'
                            borderRadius={'lg'}
                            bgColor={'gray.100'}
                            shadow={3}
                        />
                    </FormControl>
                </Box>
            </VStack>
        </>
    )
}

