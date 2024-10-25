import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


const Boats = ({ icon_name, name, description, picture }) => {
    return (
        <View style={styles.boatCard}>

            <View style={styles.headerRow}>
                <Icon name={icon_name} size={60} color="#B23B23" style={styles.icon} />
                <Text style={styles.boatName}>{name}</Text>
            </View>


            <Text style={styles.description}>{description}</Text>

            <Image source={picture} style={styles.image} />
        </View>
    );
};


const AllBoats = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text></Text>
            <Text style={styles.appTitle}>GetABoat - For Sale</Text>

            <Boats
                icon_name="sailboat"
                name="Sea Ray 500 Sundancer"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"
                picture={require('../img/sea_ray.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Four WInns Horizon 180"
                description="A sporty look and refined details truly set the Horizon 180 above all others"
                picture={require('../img/four_winns.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Flipper 640 ST"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic"
                picture={require('../img/flipper.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Princess V48"
                description="An open design with a full-length cockpit and sunroof or the enclosed deck saloon with climate control"
                picture={require('../img/princess.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Bayliner 175 Bowrider"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance"
                picture={require('../img/bayliner.jpg')}
            />
            <Boats
                icon_name="sailboat"
                name="Fairline Targa 47"
                description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"
                picture={require('../img/fairline.jpg')}
            />
        </ScrollView>
    );
};

// Styling
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        padding: 20,
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'darkblue',
        marginBottom: 20,
        textAlign: 'center',
    },
    boatCard: {
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 18,
        marginVertical: 10,
        padding: 15,
        width: '90%',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
        color: 'black'
    },
    boatName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
        marginTop: 10,
    },
});

export default AllBoats;
