import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Image, Alert, ScrollView } from 'react-native';
import css from './style';


function Produtos({ navigation }) {
    const [produto, setProduto] = useState([{ "idproduto": 4, "nome_produto": "Refrigerador LG Frost Free Side by Side InstaView Door-in-Door – 601L ", "descricao": null, "preco": 16999, "imagem": "LGeladeira.webp", "categoria": "Geladeiras", "preco_original": 20199 }, { "idproduto": 5, "nome_produto": "Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor e Rack para Vinho", "descricao": null, "preco": 5019, "imagem": "Samsung Digital inverter.webp", "categoria": "Geladeiras", "preco_original": 6389 }, { "idproduto": 6, "nome_produto": "Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Queimadores Tripla Chama Preto - 76GS ", "descricao": null, "preco": 1699, "imagem": "Fogão2.jpg", "categoria": "Fogões", "preco_original": 2419 }, { "idproduto": 7, "nome_produto": "Micro-ondas LG 30L Solo com Grill MH7097AR - Preto", "descricao": null, "preco": 699, "imagem": "microondas1.jpg", "categoria": "Microondas", "preco_original": 799 }, { "idproduto": 8, "nome_produto": "Lava Louças 14 Serviços Brastemp com Ciclo Pesado - BLF14AR ", "descricao": null, "preco": 3599, "imagem": "louça1.webp", "categoria": "Lava-louças", "preco_original": 5199 }, { "idproduto": 9, "nome_produto": "Geladeira Samsung Inverter Frost Free Duplex Inverse BAROSA com Smart Sensor", "descricao": null, "preco": 4999, "imagem": "samsung inverse barosa.webp", "categoria": "Geladeiras", "preco_original": 6299 }, { "idproduto": 10, "nome_produto": "Fogão 5 Bocas Electrolux Prata Automático com Mesa de Vidro e 2 Fornos", "descricao": null, "preco": 3799, "imagem": "FogãoElectrolux.webp", "categoria": "Fogões", "preco_original": 3899 }, { "idproduto": 11, "nome_produto": "Micro-ondas Brastemp Espelhado 32 Litros - BMS45 220v", "descricao": null, "preco": 699, "imagem": "microondas2.jpg", "categoria": "Microondas", "preco_original": 899 }, { "idproduto": 12, "nome_produto": "Micro-Ondas de Embutir com Função Grill e Painel Blue Touch", "descricao": null, "preco": 2699, "imagem": "microondas3.png", "categoria": "Microondas", "preco_original": 3999 }, { "idproduto": 13, "nome_produto": "Lavadora de Roupas Electrolux 16kg Branca com 12 Programas de", "descricao": null, "preco": 1699, "imagem": "lavadora1.jpg", "categoria": "Lava-roupas", "preco_original": 2199 }, { "idproduto": 14, "nome_produto": "Lava e Seca Samsung 11kg WD11M4453J - 12 Programas de Lavagem", "descricao": null, "preco": 3699, "imagem": "lavadora2.jpg", "categoria": "Lava-roupas", "preco_original": 4099 }, { "idproduto": 15, "nome_produto": "Lava Louças Inox 10 Serviços (LV10X) - 220V", "descricao": null, "preco": 3499, "imagem": "Dishwasher_LV10X_Front.webp", "categoria": "Lava-louças", "preco_original": 4199 }]);


    return (
        <ScrollView>
            <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,flexDirection: "row" }}>
                <Text style={{ color: "red", fontSize: 12 }} onPress={()=>{navigation.navigate("Home")}} >Voltar</Text>
                <Text style={{ color: "red", fontSize: 32 }}>Produtos</Text>
            </View>
            <View style={{ backgroundColor: "#000", alignItems: "center" }}>
                {produto.map((prod, key) => {
                    return (
                        <View style={css.container} key={key}>
                            {/* <Image style={css.imagem} source={nomeProduto} /> */}
                            <Text style={css.nomeProduto}>{prod.nome_produto}</Text>
                            <Text style={css.velho}>R$ {prod.preco_original}</Text>
                            <Text style={css.novo}>R$ {prod.preco}</Text>
                            <TouchableOpacity style={css.btn} onPress={() => {
                                Alert.alert("Obrigado por comprar na FSEletro");
                            }}>
                                <Text style={css.btnText}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </ScrollView>

    )
}

export default Produtos;