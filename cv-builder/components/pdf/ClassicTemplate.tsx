import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';
import { Translations } from '../../lib/translations';



const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Times-Roman',
    },
    header: {
        borderBottom: '1px solid #000',
        paddingBottom: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 14,
        marginBottom: 10,
        color: '#444',
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        fontSize: 10,
        color: '#666',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        borderBottom: '1px solid #ccc',
        paddingBottom: 3,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    item: {
        marginBottom: 10,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    date: {
        fontSize: 10,
        color: '#666',
    },
    description: {
        fontSize: 10,
        lineHeight: 1.4,
        marginTop: 2,
    },
    skillsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    skill: {
        fontSize: 10,
        backgroundColor: '#f0f0f0',
        padding: '2 6',
        borderRadius: 2,
    },
});

interface Props {
    data: CVData;
    t: any;
}

const ClassicTemplate: React.FC<Props> = ({ data, t }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>
                    <View style={styles.contactInfo}>
                        <Text>{data.personal.email}</Text>
                        <Text>|</Text>
                        <Text>{data.personal.phone}</Text>
                        <Text>|</Text>
                        <Text>{data.personal.city}, {data.personal.country}</Text>
                    </View>
                </View>

                {data.summary && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.summary}</Text>
                        <Text style={styles.description}>{data.summary}</Text>
                    </View>
                )}

                {data.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.experience}</Text>
                        {data.experience.map((exp, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{exp.position}</Text>
                                    <Text style={styles.date}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>{exp.company}, {exp.location}</Text>
                                <Text style={styles.description}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.education}</Text>
                        {data.education.map((edu, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.itemTitle}>{edu.degree}</Text>
                                    <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>{edu.school}, {edu.location}</Text>
                                <Text style={styles.description}>{edu.description}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {data.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{t.skills}</Text>
                        <View style={styles.skillsList}>
                            {data.skills.map((skill, index) => (
                                <Text key={index} style={styles.skill}>{skill}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </Page>
        </Document>
    );
};

export default ClassicTemplate;
