//importações de componentes do sistema
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Container, Item, Label, Input, Button, Text, Row } from 'native-base';

export default class App extends Component {
  //construtor dos stados de variaveis
  constructor(props) {
    super(props);
    this.state = {
      consumoT: 0,
      couvertA: 0,
      dividir: 0,
      txserv: 0,
      contaT: 0,
      valorPP: 0
    }

    this.calculaClick = this.calculaClick.bind(this);
  }

  //função assincrona que seta as variaveis descritas a cima
  async calculaClick(event) {
     await this.setState({ contaT: (parseFloat(this.state.consumoT) + parseFloat(this.state.txserv) + parseFloat(this.state.couvertA)).toFixed(2) })
     this.setState({ valorPP: (parseFloat(this.state.contaT) / parseFloat(this.state.dividir)).toFixed(2) })
  }

  render() {
    return (
      <Container style={styles.backgroud}>
        <View style={styles.block}>
          <Item fixedLabel >
            <Label>Consumo Total R$:</Label>
            <Input onChangeText={(consumoT) => this.setState({ consumoT: consumoT, txserv: (consumoT / 10) })} />
          </Item>
          <Item fixedLabel >
            <Label>Couvert Artistico R$:</Label>
            <Input onChangeText={(couvertA) => this.setState({ couvertA })} />
          </Item>
          <Item fixedLabel >
            <Label>Dividir Conta Por:</Label>
            <Input onChangeText={(dividir) => this.setState({ dividir })} />
          </Item>
        </View>
        <View style={styles.block}>
          <Button warning style={{ alignSelf: 'center' }}><Text style={{ color: 'black', fontWeight: '900' }} onPress={this.calculaClick} > Calcular conta final </Text></Button>
        </View>
        <View style={styles.left}>
          <Text style={{ width: "70%" }}> Taxa Serviço (10%) R$: </Text><Text style={{ width: "30%" }}> {(this.state.txserv).toFixed(2)} </Text>
          <Text style={{ width: "70%" }}> Conta Total R$: </Text><Text style={{ width: "30%" }}> {this.state.contaT} </Text>
          <Text style={{ width: "70%" }}> Valor por Pessoa R$: </Text ><Text style={{ width: "30%" }}> {this.state.valorPP} </Text>
        </View>

        <Image source={require('./logo_balaio.fw.png')} style={{ height: 210, width: '100%', alignSelf: 'center' }} />

      </Container>
    )
  }
};

const styles = StyleSheet.create({

  backgroud: {
    backgroundColor: '#FF6600',
    padding: 10,
    height: '100%'
  },
  block: {
    paddingBottom: 20
  },
  left: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  }


});
