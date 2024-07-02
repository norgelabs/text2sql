import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "#171717";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      position='relative'>
<Flex
  border='5px solid'
  borderColor={borderColor}
  bg='#171717'
  borderRadius='50%'
  w='94px'
  h='94px'
  align='center'
  justify='center'
  mx='auto'
  position='absolute'
  left='50%'
  top='-47px'
  transform='translate(-50%, 0%)'>
  <img src="https://media.licdn.com/dms/image/D4D03AQFGXr7s-7U_fw/profile-displayphoto-shrink_400_400/0/1716295354112?e=1725494400&v=beta&t=VxDt4W5uQCLsyxC04nPAqcjNMpbfy9Fbgsjt3wLR-ws" style={{ borderRadius: '50%', width: '84px', height: '84px', objectFit: 'cover' }} />
</Flex>

      
      <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mt="10px"
          mb='6px'>
          Raniere P Santos
        </Text>
        <Text
          fontSize={{ base: "lg", xl: "15px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mt="10px"
          mb='6px'>
          Teste técnico Laborit
        </Text>
        <Text
          fontSize='14px'
          color={"white"}
          fontWeight='500'
          px='10px'
          mb='6px'
          textAlign='center'>
          Uma breve introdução ao text2sql, utilizando uma abordagem limpa e reutilizando recursos e ferramentas de codigo aberto.
        </Text>
      </Flex>
      <Link target="_blank" href='https://build.norgebots.com/typebots/cly3nhw5l0013l3ebiu0ap83u/edit'>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Fluxo desenvolvido
        </Button>
      </Link>
      <Link target="_blank" href='https://www.linkedin.com/in/ranierepsantos/'>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Visite o meu linkedin
        </Button>
      </Link>
    </Flex>
  );
}
