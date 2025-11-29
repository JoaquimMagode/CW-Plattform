import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { CVData } from '../../lib/types';
import { Translations } from '../../lib/translations';
// Removed translations import



const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Helvetica',
    },
    sidebar: {
        width: '35%',
        backgroundColor: '#f8f9fa',
        padding: 20,
        height: '100%',
    },
    main: {
        width: '65%',
        padding: 30,
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        alignSelf: 'center',
        objectFit: 'cover',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 5,
    },
    title: {
        fontSize: 14,
        color: '#6d54b0',
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 10,
        marginTop: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
        borderBottom: '2px solid #6d54b0',
        paddingBottom: 5,
    },
    sidebarTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 10,
        marginTop: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    text: {
        fontSize: 10,
        color: '#4a4a4a',
        marginBottom: 3,
        lineHeight: 1.4,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    contactText: {
        fontSize: 9,
        color: '#4a4a4a',
        marginLeft: 5,
    },
    skillBadge: {
        backgroundColor: '#e9ecef',
        padding: '4 8',
        borderRadius: 4,
        marginBottom: 5,
        marginRight: 5,
        fontSize: 9,
        color: '#495057',
    },
    skillsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    experienceItem: {
        marginBottom: 15,
    },
    date: {
        fontSize: 9,
        color: '#868e96',
        marginBottom: 2,
    },
    company: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#495057',
    },
});

interface Props {
    data: CVData;
    t: any; // Using any to avoid complex type import issues, or could import Translations type
}

const ModernTemplate: React.FC<Props> = ({ data, t }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Sidebar */}
                <View style={styles.sidebar}>
                    {data.personal.photo && (
                        <Image src={data.personal.photo} style={styles.photo} />
                    )}

                    <View style={styles.contactItem}>
                        <Text style={styles.sidebarTitle}>{t.contact}</Text>
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.contactText}>{data.personal.email}</Text>
                        <Text style={styles.contactText}>{data.personal.phone}</Text>
                        <Text style={styles.contactText}>{data.personal.address}</Text>
                        <Text style={styles.contactText}>{data.personal.city}, {data.personal.country}</Text>
                    </View>

                    {data.skills.length > 0 && (
                        <View>
                            <Text style={styles.sidebarTitle}>{t.skills}</Text>
                            <View style={styles.skillsContainer}>
                                {data.skills.map((skill, index) => (
                                    <Text key={index} style={styles.skillBadge}>{skill}</Text>
                                ))}
                            </View>
                        </View>
                    )}

                    {data.languages.length > 0 && (
                        <View>
                            <Text style={styles.sidebarTitle}>{t.languages}</Text>
                            {data.languages.map((lang, index) => (
                                <View key={index} style={{ marginBottom: 4 }}>
                                    <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{lang.language}</Text>
                                    <Text style={{ fontSize: 9, color: '#666' }}>{lang.proficiency}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>

                {/* Main Content */}
                <View style={styles.main}>
                    <Text style={styles.name}>{data.personal.fullName}</Text>
                    <Text style={styles.title}>{data.personal.title}</Text>

                    {data.summary && (
                        <View>
                            <Text style={styles.sectionTitle}>{t.summary}</Text>
                            <Text style={styles.text}>{data.summary}</Text>
                        </View>
                    )}

                    {data.experience.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitle}>{t.experience}</Text>
                            {data.experience.map((exp, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1a1a1a' }}>{exp.position}</Text>
                                    <Text style={styles.company}>{exp.company} | {exp.location}</Text>
                                    <Text style={styles.date}>{exp.startDate} - {exp.current ? t.present : exp.endDate}</Text>
                                    <Text style={[styles.text, { marginTop: 4 }]}>{exp.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {data.education.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitle}>{t.education}</Text>
                            {data.education.map((edu, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1a1a1a' }}>{edu.degree}</Text>
                                    <Text style={styles.company}>{edu.school} | {edu.location}</Text>
                                    <Text style={styles.date}>{edu.startDate} - {edu.endDate}</Text>
                                    <Text style={[styles.text, { marginTop: 4 }]}>{edu.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}

                    {data.certifications.length > 0 && (
                        <View>
                            <Text style={styles.sectionTitle}>{t.certifications}</Text>
                            {data.certifications.map((cert, index) => (
                                <View key={index} style={styles.experienceItem}>
                                    <Text style={{ fontSize: 11, fontWeight: 'bold', color: '#1a1a1a' }}>{cert.name}</Text>
                                    <Text style={styles.company}>{cert.issuer}</Text>
                                    <Text style={styles.date}>{cert.date}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default ModernTemplate;
